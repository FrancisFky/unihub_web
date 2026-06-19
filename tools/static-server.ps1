param(
  [string]$Root = (Get-Location).Path,
  [int]$Port = 8000
)

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Web

$rootFull = [System.IO.Path]::GetFullPath($Root)
$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add("http://127.0.0.1:$Port/")
$listener.Start()

while ($listener.IsListening) {
  $context = $listener.GetContext()
  try {
    $path = [System.Web.HttpUtility]::UrlDecode($context.Request.Url.AbsolutePath.TrimStart('/'))
    if ([string]::IsNullOrWhiteSpace($path)) {
      $path = 'index.html'
    }

    $full = [System.IO.Path]::GetFullPath([System.IO.Path]::Combine($rootFull, $path))
    if (!$full.StartsWith($rootFull, [System.StringComparison]::OrdinalIgnoreCase)) {
      $context.Response.StatusCode = 403
      continue
    }

    if (![System.IO.File]::Exists($full)) {
      $context.Response.StatusCode = 404
      continue
    }

    $types = @{
      '.html' = 'text/html; charset=utf-8'
      '.css' = 'text/css; charset=utf-8'
      '.js' = 'application/javascript; charset=utf-8'
      '.json' = 'application/json; charset=utf-8'
      '.svg' = 'image/svg+xml'
      '.png' = 'image/png'
      '.jpg' = 'image/jpeg'
      '.jpeg' = 'image/jpeg'
    }
    $ext = [System.IO.Path]::GetExtension($full).ToLowerInvariant()
    if ($types.ContainsKey($ext)) {
      $context.Response.ContentType = $types[$ext]
    }

    $bytes = [System.IO.File]::ReadAllBytes($full)
    $context.Response.ContentLength64 = $bytes.Length
    $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
  } finally {
    $context.Response.Close()
  }
}
