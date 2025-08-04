import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Rufina",
});
export default withBaseProps({ 
    title: "Trasporto acqua Rufina", 
    locationNames: {label: "Rufina", href: "rufina"}  
});