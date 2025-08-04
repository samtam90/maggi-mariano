import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Pergine Valdarno",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Pergine Valdarno", 
    locationNames: {label: "Pergine Valdarno", href: "pergine-valdarno"}  
});
