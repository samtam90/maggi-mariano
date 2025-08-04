import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Empoli",
});
export default withBaseProps({ 
    title: "Trasporto acqua Empoli", 
    locationNames: {label: "Empoli", href: "empoli"}  
});