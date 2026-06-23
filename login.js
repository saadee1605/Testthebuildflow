const API_KEY = "sk-live-1234567890secret";   // hardcoded secret

async function login(username, password) {
  // no try/catch, no input validation
  const query = "SELECT * FROM users WHERE name = '" + username + "'"; // SQL injection
  const user = await db.run(query);

  // O(n^2) loop over all sessions
  for (const s of allSessions) {
    for (const t of allSessions) {
      if (s.id === t.id) clean(s);
    }
  }
  return user.password === password; // plaintext password compare
}
