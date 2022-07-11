import { Menu, Row } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { UseTypeSelector } from '../hooks/useTypedSelector';
import { RouteNames } from '../routes/enums/route-names';

const NavBar: FC = () => {
  const navigate = useNavigate();
  const { isAuth } = UseTypeSelector((state) => state.authReducer);

  return (
    <Header>
      {isAuth ? (
        <Row justify="end">
          <>
            <div style={{ color: 'white', marginRight: '1em' }}>John Doe</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={() => console.log('Logged out')} key={1}>
                Log Out
              </Menu.Item>
            </Menu>
          </>
        </Row>
      ) : (
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ justifyContent: 'end' }}
          selectable={false}
        >
          <Menu.Item onClick={() => navigate(RouteNames.LOGIN)} key={1}>
            Login
          </Menu.Item>
        </Menu>
      )}
    </Header>
  );
};

export default NavBar;
