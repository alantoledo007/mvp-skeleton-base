import withDocuments from '@/hocs/withDocuments';
import styled from 'styled-components';

const Grid = ({ documents }) => {
  const itemRender = (item) => {
    return <Item key={item.id}>{JSON.stringify(item)}</Item>;
  };

  return <Container>{documents.map(itemRender)}</Container>;
};

const Container = styled.div``;

const Item = styled.div``;

const ExampleGrid = withDocuments('example')(Grid);

export default ExampleGrid;
