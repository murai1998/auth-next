import { useSession } from 'next-auth/client'
import dynamic from 'next/dynamic'
import Layout from '../components/layout'

const UnauthenticatedComponent = dynamic(() =>
  import('../components/unauthenticated')
)
const AuthenticatedComponent = dynamic(() =>
  import('../components/authenticated')
)

export default function Profile() {
  const [session, loading] = useSession()

  if (typeof window !== 'undefined' && loading) return <p>Loading...</p>

  if (!session) return <UnauthenticatedComponent />

  return <Layout><AuthenticatedComponent user={session.user} /></Layout>
}