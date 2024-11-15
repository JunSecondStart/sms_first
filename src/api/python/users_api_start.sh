if [ -f users_api_process.txt ]; then
rm users_api_process.txt
fi

wait
source venv/bin/activate
wait
uvicorn users_api:app --host 0.0.0.0 --port 8383 &
echo "$!" > "1_users_api_process_first_per_a_day.txt"
ps ax | grep users_api | grep host | cut -d " " -f 1 > 2_users_api_process_now.txt
