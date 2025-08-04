import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche San Giovanni Valdarno",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche San Giovanni Valdarno", 
    locationNames: {label: "San Giovanni Valdarno", href: "san-giovanni-valdarno"}  
});
