#!/bin/sh
# Fetch the hero images (hosted on a CDN) into a/h at build time.
set -e
B=https://d2ol7oe51mr4n9.cloudfront.net/user_3M35QoE9msSzcMZabNwnyrfEgJ5
mkdir -p a/h
curl -sfL -o a/h/oma-cloud.webp   $B/7b695b44-9bb7-427b-af9d-7f340e2d43d8.webp
curl -sfL -o a/h/oma-sky.webp     $B/c7b81ce7-ae5f-41fa-bff7-24d8d734fd70.webp
curl -sfL -o a/h/oma-cloud-m.webp $B/38a36e1b-56ad-429e-902e-fdd699293947.webp
