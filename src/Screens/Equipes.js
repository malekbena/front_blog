import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Layout from '../Containers/Layout';
import DynamicSlide from '../Components/DynamicSlide';
import { AppConsumer } from '../Context/AppContext';


class Equipes extends Component {

  render() {
    return (
      <AppConsumer>
        {({ teams, waiting, selectedTeam, handleChangeTeam }) => {
          return (
            <Layout>
              <Container fluid className="p-0">
                {/* vérification si waiting est à false = que le state teams est chargé et qu'il n'est pas null */}
                {!waiting && teams !== null &&
                  <>
                    {/* slide pour les teams la props datas pour le tableau d'équipe et la props action avec la fonction handleChangeTeam qui change le team selectionner pour mettre à jour le front */}
                    <DynamicSlide title={'équipe'} datas={teams} action={handleChangeTeam} />
                    {selectedTeam !== null &&
                      <div className="cover" style={{ backgroundImage: `url(${selectedTeam.full_image})` }}>
                        <Col lg={6} className="mx-auto">
                          <h3 className="text-danger"> {selectedTeam.name}</h3>
                          {selectedTeam.players.map((player, k) => {
                            return (
                              <Row key={k} className="m-5 mx-auto ">
                                <Col lg={3}>
                                <img src={player.full_image}
                                    height="150px" alt="avatar" />
                                </Col>
                                <Col lg={9} className="shadowCustom">
                                  <h1 className="text-light">{player.name}</h1>
                                  <p className="text-light">{player.description}</p>
                                </Col>
                              </Row>
                            )
                          })}
                        </Col>
{/*                         <DynamicPost datas={selectedTeam.players} />
 */}
                      </div>
                    }
                  </>
                }
              </Container>
            </Layout>
          )
        }}
      </AppConsumer>

    );
  }
}

export default Equipes;


















// FIRST VERSION

// import React, { Component } from 'react';
// import { Container, Row, Col, Button } from 'reactstrap';
// import Layout from '../Containers/Layout'
// import Axios from 'axios';


// class Equipes extends Component {
//   state = {
//     team: {},
//     waiting: true
//   }

//   componentDidMount() {
//     this.getTeam(1).then(() => {
//       this.setState({
//         waiting: false
//       })
//     })
//   }

//   getTeam = async (id) => {
//     Axios
//       .get(`https://jsonplaceholder.typicode.com/users/${id}`)
//       .then(resp => {
//         this.setState({
//           team: resp.data,
//         });
//       })
//       .catch(err => {
//         throw err;
//       });
//   }

//   render() {
//     let { team, waiting } = this.state
//     return (
//       <Layout>
//         <Container fluid className="vh-100 justify-content-center align-items-center d-flex ">
//           <Col lg={6}>
//             <Button className="linkCustom m-5" onClick={() => this.getTeam(1)}>team1</Button>
//             <Button className="linkCustom m-5" onClick={() => this.getTeam(2)}>team2</Button>
//             <Button className="linkCustom m-5" onClick={() => this.getTeam(3)}>team3</Button>
//             <Button className="linkCustom m-5" onClick={() => this.getTeam(4)}>team4</Button>
//             {!waiting &&
//               <>
//                 <h3 className="text-danger"> vidéo d'équipe {team.id}</h3>
//                 <Row className="m-5 mx-auto ">
//                   <Col lg={3}>
//                     <img src="data:image/png;base64,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"
//                       height="150px" alt="avatar" />
//                   </Col>
//                   <Col lg={9} className="shadowCustom">
//                     <h1 className="text-light">{team.name}</h1>
//                     <p className="text-light">{team.name}</p>
//                   </Col>
//                 </Row>
//                 <Row className="m-5 mx-auto">
//                   <Col lg={3}>
//                     <img src="data:image/png;base64,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"
//                       height="150px" alt="avatar" />
//                   </Col>
//                   <Col lg={9} className="shadowCustom">
//                     <h1 className="text-light">{team.username}</h1>
//                     <p className="text-light">{team.username}</p>
//                   </Col>
//                 </Row>
//                 <Row className="m-5 mx-auto">
//                   <Col lg={3}>
//                     <img src="data:image/png;base64,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"
//                       height="150px" alt="avatar" />
//                   </Col>
//                   <Col lg={9} className="shadowCustom w-90">
//                     <h1 className="text-light">{team.email}</h1>
//                     <p className="text-light">{team.email}</p>
//                   </Col>
//                 </Row>
//               </>
//             }
//           </Col>
//         </Container>
//       </Layout>
//     );
//   }
// }

// export default Equipes;