import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Deruta",
});
export default withBaseProps({ 
    title: "Trasporto acqua Deruta", 
    locationNames: {label: "Deruta", href: "deruta"}  
});