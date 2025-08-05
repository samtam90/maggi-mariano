import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Savona",
    canonical: links.autospurgo["savona"],
});
export default withBaseProps({ 
    title: "Autospurgo Savona", 
    locationNames: {label: "Savona", href: "savona"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["savona"],
        name: "Savona",
    }),
});
