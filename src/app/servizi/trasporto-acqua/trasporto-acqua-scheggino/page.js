import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Scheggino",
});
export default withBaseProps({ 
    title: "Trasporto acqua Scheggino", 
    locationNames: {label: "Scheggino", href: "scheggino"}  
});