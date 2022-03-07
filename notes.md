  <% if (!user) { %>
    <link rel="stylesheet" href="/stylesheets/siwg.css">
  <% } %>
</head>
<body>
  <nav>
    <a href="/foodies"></a>
    <a href="/profiles"></a>
      <h4>hello, <%= user ? user.profile.name : "friend" %></h4>
      <% if (user?.profile.avatar) { %>
        <div>
          <img
            src="<%= user.profile.avatar %>"
            alt="<%= user.profile.name %> avatar"
            width="40" height="40"
            
          />
        </div>
      <% } %>
    <% if (user) { %>
      <a href="/auth/logout">
        <button type="submit">Logout 👋</button>
      </a>
    <% } else { %>
      <a href="/auth/google" class="siwg-link">
        <button type="submit" class="siwg">
          <img id="siwg-image" alt="Sign in with Google" />
        </button>
      </a>
    <% } %>
  </nav>
