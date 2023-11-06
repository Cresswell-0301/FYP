import styled from "styled-components"

const Container = styled.div`
    display: flex;
    width: 100%;
    background-color: white;
`;

const MiniContainer = styled.div`
    width: 160px;
    height: 100vh;
    background-color: rgb(229, 231, 235);
    position: sticky;
    top: 0;
    padding: 16px;
`;

const Title = styled.h2`
    font-size: 1.125rem;
    line-height: 1.75rem;
    text-align: center;
    font-weight: bold;
    margin-bottom: 1rem;
`;

const Select = styled.ul`
    list-style-type: none;
    text-align: center;
`;

const Option = styled.li`
    margin-bottom: 0.5rem;
    border-radius: 10px;
    &:hover {
        background-color: red
    }
`;

const A = styled.a`
    color: rgb(55, 65, 81);
    font-weight: bold;
    background-color: black;
    &:hover {
        color: rgb(10, 82, 240);
    }
`;

const Detail = styled.div`
    width: 75%;
    background-color: white;
    padding: 1rem;
    color: black;
`;

export default function SideBar(){
    return (
        <div>
            <Container>
                <MiniContainer>
                    <Title>Logo</Title>

                    <Select>
                        <Option>
                            <A href="#">Home</A>
                        </Option>

                        <Option>
                            <A href="#">About</A>
                        </Option>

                        <Option>
                            <A href="#">Contact</A>
                        </Option>
                    </Select>
                </MiniContainer>

                <Detail>Content</Detail>
            </Container>
        </div>
    )
}