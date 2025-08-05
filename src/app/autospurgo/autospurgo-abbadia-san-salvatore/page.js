import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Abbadia San Salvatore",
    canonical: links.autospurgo["abbadia-san-salvatore"],
});
export default withBaseProps({ 
    title: "Autospurgo Abbadia San Salvatore", 
    locationNames: {label: "Abbadia San Salvatore", href: "abbadia-san-salvatore"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["siena"],
        name: "Siena",
    }),
});
