import {useState} from "react";
import {AnimatePresence} from "motion/react";
import { ANIMATIONS_LIST } from "../../../../utils/constants";
import {Container, List, ListItem, ItemHeader, ItemTitle, ItemNumber, ImgContainer, ItemDescriptionContainer, ItemTechStack} from "./PlaygroundList.styled";


const IMG_VARIANTS = {
  initial:{scale:1, transition:{duration:0.3}},
  animate:{scale:0.9, transition:{duration:0.3}},
};
const CONTENT_VARIANTS = {
  initial: { opacity: 0, height: 0, y: -10 },
  animate: {
    opacity: 1,
    height: "auto",
    y: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    height: 0,
    y: -10,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const PlaygroundList = () => {
  const [clickedId, setIsClickedId] = useState(null);
  const handleClick = (id)=>{
    setIsClickedId((prev)=>prev===id?null:id);
  }

  return (
    <Container>
      <List>
        {ANIMATIONS_LIST.map((item) => {
          const isClicked = clickedId === item.id;
          return(
            <ListItem key={item.id}>
              <AnimatePresence mode="wait"> 
                {isClicked && 
                  <ItemHeader layout key={`title-${item.id}`} variants={CONTENT_VARIANTS} initial="initial" animate="animate" exit="exit">
                    <div>
                      <ItemNumber>{item.id}</ItemNumber>
                    </div>
                    <ItemTitle>{item.title}</ItemTitle>
                  </ItemHeader>
                }
              </AnimatePresence>
              <ImgContainer variants={IMG_VARIANTS} initial="initial" animate={clickedId === item.id ? "animate" : "initial"} onClick={()=>handleClick(item.id)}>
                {/* <img /> */}
              </ImgContainer>
              <AnimatePresence mode="wait">
                {isClicked && 
                <AnimatePresence mode="wait">
                  <ItemDescriptionContainer layout key={`desc-${item.id}`} variants={CONTENT_VARIANTS} initial="initial" animate="animate" exit="exit">
                    <ItemTechStack>{item.technologies.join(" / ")}</ItemTechStack>
                  </ItemDescriptionContainer>
                </AnimatePresence>
                }
              </AnimatePresence>
            </ListItem>
          )
        })}
      </List>
    </Container>
  );
};

export default PlaygroundList;
