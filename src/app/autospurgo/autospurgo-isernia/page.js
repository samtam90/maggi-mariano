import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Isernia",
    canonical: links.autospurgo["isernia"],
});
export default withBaseProps({ 
    title: "Autospurgo Isernia", 
    locationNames: {label: "Isernia", href: "isernia"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["isernia"],
        name: "Isernia",
    }),
});
