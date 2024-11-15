cat 2_users_api_process_now.txt | xargs -I {} kill -9 {} 
wait
