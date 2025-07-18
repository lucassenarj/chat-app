import Chat from "@/components/Chat";
import ChatList from "@/components/ChatList";
import Layout from "@/components/Layout";

function HomePage() {
  return (
    <Layout>
      <ChatList />
      <Chat />
    </Layout>
  );
}

export default HomePage;
