import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Monte Santa Maria Tiberina",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Monte Santa Maria Tiberina", 
    locationNames: {label: "Monte Santa Maria Tiberina", href: "monte-santa-maria-tiberina"}  
});
