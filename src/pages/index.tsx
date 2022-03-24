import Introduce from '@/components/Introduce';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const Index = () => {
  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
      {/* <Header /> */}
      <Introduce />
    </Main>
  );
};

export default Index;
