import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Paciano",
});
export default withBaseProps({ 
    title: "Trasporto acqua Paciano", 
    locationNames: {label: "Paciano", href: "paciano"}  
});