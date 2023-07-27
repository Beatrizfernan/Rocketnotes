import{RiShutDownLine} from 'react-icons/ri'

import { Container,Profile,Logout} from "./styles"; 

export function Header(){
    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/Beatrizfernan.png" alt="foto do usuario"
                />

                <div>
                    <span> Bem-vindo</span>
                    <strong>Beatriz Fernandes</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}