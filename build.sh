#!/bin/sh
# Fetch the hero images (hosted on a CDN) into a/h at build time.
set -e
B=https://d2ol7oe51mr4n9.cloudfront.net/user_3M35QoE9msSzcMZabNwnyrfEgJ5
mkdir -p a/h
curl -sfL -o a/h/oma-sky.webp    $B/c7b81ce7-ae5f-41fa-bff7-24d8d734fd70.webp
curl -sfL -o a/h/oma-tap.webp    $B/07808a89-83f5-469a-a425-56beb99f74ff.webp
curl -sfL -o a/h/oma-kiss.webp   $B/0b886d78-a38b-4f32-bab9-626fde682ed0.webp
curl -sfL -o a/h/oma-tap-m.webp  $B/7e7c5f71-f79f-48ac-b25e-81392ed52d5f.webp
curl -sfL -o a/h/oma-kiss-m.webp $B/b3311df5-4a8f-43b5-8562-2641e5e72eed.webp
