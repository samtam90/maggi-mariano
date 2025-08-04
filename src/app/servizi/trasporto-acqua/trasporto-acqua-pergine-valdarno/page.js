import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Pergine Valdarno",
});
export default withBaseProps({ 
    title: "Trasporto acqua Pergine Valdarno", 
    locationNames: {label: "Pergine Valdarno", href: "pergine-valdarno"}  
});