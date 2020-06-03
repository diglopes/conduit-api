# Conduit API

## Roadmap

### Endpoints

#### User

- [ ] **POST** /api/users - Registration route
- [ ] **POST** /api/users/login - Authentication route
- [ ] **GET** /api/user - Get current user (auth required)
- [ ] **PUT** /api/user - Update user data (auth required)

#### Profile

- [ ] **POST** /api/profiles/:username - Returns a profile (optional auth)
- [ ] **POST** /api/profiles/:username/follow - Follows an user (auth required)
- [ ] **DELETE** /api/profiles/:username/follow - Unfollows an user (auth required)


#### Article

- [ ] **GET** /api/articles - Returns most recent articles globally by default
  - [ ] Filters: tag, author and favorited
  - [ ] Limit (20 default) and offset (0 default)
- [ ] **GET** /api/articles/feed - Returns multiple articles created by followed users ordered by most recent first (auth required)
  - [ ] Limit (20 default) and offset (0 default)
- [ ] **GET** /api/articles/:slug - Returns a single article
- [ ] **POST** /api/articles - Creates a article (auth required)
- [ ] **PUT** /api/articles/:slug - Updates a article (auth required)
- [ ] **DELETE** /api/articles/:slug - Deletes a article (auth required)
- [ ] **POST** /api/articles/:slug/comments - Adds a comment (auth required)
- [ ] **GET** /api/articles/:slug/comments  - Gets comments from a article (auth optional)
- [ ] **DELETE** /api/articles/:slug/comments/:id - Deletes a comment from a article (auth required)
- [ ] **POST** /api/articles/:slug/favorite - Favorites a article (auth required)
- [ ] **DELETE** /api/articles/:slug/favorite - Unfavorites a article (auth required)

#### Tags

- [ ] **GET** /api/tags - Returns a list of tags