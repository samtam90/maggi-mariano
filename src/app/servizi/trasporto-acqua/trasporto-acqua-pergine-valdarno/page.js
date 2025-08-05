import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Pergine Valdarno",
  canonical: links.servizi["trasporto-acqua"]["pergine-valdarno"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Pergine Valdarno", 
    locationNames: {label: "Pergine Valdarno", href: "pergine-valdarno"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
