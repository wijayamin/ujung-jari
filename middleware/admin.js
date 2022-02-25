export default function ({ store, redirect }) {
  const role = store.auth.user ? store.auth.user.role : 'user'
  if (role === 'root' || role === 'admin') {
    return redirect('/console')
  }
}