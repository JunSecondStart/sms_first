source .env;
curl -X 'GET' \
  -u "$USERNAME:$PASSWORD" \
  'http://54.238.22.31:8003/send_sms/print_data?id=2&content_text=aaa' \
  -H 'accept: application/json';