import React,{Component} from 'react';
import Title from "../components/Title";
import Categories from "../components/Categories";
import MenuItems from "../components/MenuItems";
import portfolios from "../components/allPortfolios";

class PortfoliosPage extends Component  {
      state = {
          categories : ["All",...portfolios.reduce((acc,portfolio) => {
              if(!(acc.includes(portfolio.category))) {
                      acc.push(portfolio.category);
              }
              return acc;
          },[])],
          portfolios
      }

       filterCategory = (category) => {
          if(category ==="All"){
              this.setState({
                  portfolios: portfolios
              });
              return portfolios;
          }
          const filteredCategories =
              portfolios.filter((portfolio)=>portfolio.category === category);
          this.setState({
              portfolios: filteredCategories
          });
       }

      render() {
          return (
              <div className="PortfoliosPage">
                  <Title className="portfolios-title" title="Portfolios" />
                  <div className="portfolios-container">
                      <Categories portfolios={this.state.portfolios} categories={this.state.categories} filterCategory={this.filterCategory} />
                      <MenuItems menuItems={this.state.portfolios} />
                  </div>
              </div>
          );
      }
}

export default PortfoliosPage;