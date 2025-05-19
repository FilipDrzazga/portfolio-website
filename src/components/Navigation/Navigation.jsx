import { NavigationWrapper, NavigationList, NavigationItem, NavigationLink } from "./Navigation.styled";

const Navigation = () => {
  return (
    <NavigationWrapper>
      <NavigationList>
        <NavigationItem>
          <NavigationLink>BIO</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink>PLAYGROUND</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink>WORK</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink>MAIL</NavigationLink>
        </NavigationItem>
      </NavigationList>
    </NavigationWrapper>
  );
};

export default Navigation;
