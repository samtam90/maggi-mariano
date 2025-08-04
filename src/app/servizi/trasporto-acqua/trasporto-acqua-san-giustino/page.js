import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua San Giustino",
});
export default withBaseProps({ 
    title: "Trasporto acqua San Giustino", 
    locationNames: {label: "San Giustino", href: "san-giustino"}  
});