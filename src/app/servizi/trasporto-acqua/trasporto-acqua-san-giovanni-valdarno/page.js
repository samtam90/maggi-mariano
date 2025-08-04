import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua San Giovanni Valdarno",
  canonical: links.servizi["trasporto-acqua"]["san-giovanni-valdarno"]
});
export default withBaseProps({ 
    title: "Trasporto acqua San Giovanni Valdarno", 
    locationNames: {label: "San Giovanni Valdarno", href: "san-giovanni-valdarno"}  
});