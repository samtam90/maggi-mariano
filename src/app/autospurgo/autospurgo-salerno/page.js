import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Salerno",
    canonical: links.autospurgo["salerno"],
});
export default withBaseProps({ 
    title: "Autospurgo Salerno", 
    locationNames: {label: "Salerno", href: "salerno"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["salerno"],
        name: "Salerno",
    }),
});
