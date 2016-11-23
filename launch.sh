adb kill-server
adb reverse tcp:8081 tcp:8081
adb reverse tcp:8082 tcp:8082
adb reverse tcp:3001 tcp:3001
adb reverse tcp:9001 tcp:9001

echo 'cd server && npm start'
echo 'cd web && npm start'
echo 'cd shared && node redux_server.js'
echo 'cd mobile && npm start'
echo 'cd samples_mobile && npm start -- --port=8082'