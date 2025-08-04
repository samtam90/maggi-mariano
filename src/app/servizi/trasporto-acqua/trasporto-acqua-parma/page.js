import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Parma",
});
export default withBaseProps({ 
    title: "Trasporto acqua Parma", 
    locationNames: {label: "Parma", href: "parma"}  
});