import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
      ____       __                               ____  _                         
    / __ \\___  / /_  ____ ___  ______ _____     / __ )(_)_____      ______ ______
   / / / / _ \\/ __ \\/ __ \`/ / / / __ \`/ __ \\   / __  / / ___/ | /| / / __ \`/ ___/
  / /_/ /  __/ /_/ / /_/ / /_/ / /_/ / / / /  / /_/ / (__  )| |/ |/ / /_/ (__  ) 
 /_____/\\___/_.___/\\__,_/\\__, /\\__,_/_/ /_/  /_____/_/____/ |__/|__/\\__,_/____/  
                        /____/                                                   
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
      ____       __                          
    / __ \\___  / /_  ____ ___  ______ _____ 
    / / / / _ \\/ __ \\/ __ \`/ / / / __ \`/ __ \\
  / /_/ /  __/ /_/ / /_/ / /_/ / /_/ / / / /
  /_____/\\___/_.___/\\__,_/\\__, /\\__,_/_/ /_/ 
    / __ )(_)_____      /____/ ______       
    / __  / / ___/ | /| / / __ \`/ ___/       
  / /_/ / (__  )| |/ |/ / /_/ (__  )        
  /_____/_/____/ |__/|__/\\__,_/____/   
 
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 1.3.1)</div>
        <Seperator>----</Seperator>
        <div>
          This project's source code can be found in this project's{" "}
          <Link href="https://github.com/Santiago-Tesla/Terminal-Portfolio">
            GitHub repo
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
            .::                        
        .+##%%%%#+:                    
      .=*%%%@@@%@@%#-                  
      #%%%%%%%%%@@@@%#                 
      +%#***######%%%%.                
      =#**********%%%%                 
      =###**##%##**@@#                 
      .##%#*#%#%##+#%#                 
      :******##**++*%#                 
      :**###%%%###**+.                 
      +##***#%%###+                   
        =#*#####%##+                   
        =##%%%%%%#*                   
        .##%%%%%##*+:                 
          *######%%##****-             
      .-+#*****%%##%%%##**=:          
  :+*##%##****#%%%%%%%%%%%##*=.       
  +%%%#%%#%%%%#%%%%%%%%%%%%%%%##+      
-%%%##%%%%%%%%%%%%%%%%%%%%%%%%##*.    
+%%%#%%%%%%%%%%%%%%%%%%%%%%%%#%##*.   
#%%%%#*#***#****#%%%%%%%%%%%%%#%##-   
#%%####%**%#**##%%%%%%%%%%%%%%#%%#*   
#%###**%*##****#%%%%%%%@%%%%%%%#%%#:  
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
