import { Link } from 'react-router-dom';
import { Box } from '../UI/Box';
import { LIstItem, List } from '../UI/List';
import { Section } from '../UI/Section';
import { MainTitle, SectionTitle } from '../UI/Text';
import Card from '../components/Card/Card';
import Theme from '../styles/theme';

const HomePage = () => {
  const chatRoomsDummy = [
    {
      id: 'general-chat',
      route: 'general-chat',
      name: 'General chat',
    },
    {
      id: 'entertainment',
      route: 'entertainment',
      name: 'Entertainment',
    },
    {
      id: 'news',
      route: 'news',
      name: 'News',
    },
    {
      id: 'business',
      route: 'business',
      name: 'Business',
    },
    {
      id: 'sport',
      route: 'sport',
      name: 'Sport',
    },
    {
      id: 'dating',
      route: 'dating',
      name: 'Dating',
    },
    {
      id: 'beauty-sphere',
      route: 'beauty-sphere',
      name: 'Beauty sphere',
    },
    {
      id: 'vacation',
      route: 'vacation',
      name: 'Vacation',
    },
  ];

  const { main } = Theme.gradients;

  return (
    <Section padding='0 15px'>
      <Box max-width='1440px' margin='130px auto 158px'>
        <SectionTitle>Welcome to the chat!</SectionTitle>
        <MainTitle>Choose a chat and enjoy communication</MainTitle>
        <List>
          {chatRoomsDummy.map((room) => (
            <LIstItem key={room.id}>
              <Link to={room.route}>
                <Card hoverBg={main}>{room.name}</Card>
              </Link>
            </LIstItem>
          ))}
        </List>
      </Box>
    </Section>
  );
};

export default HomePage;
