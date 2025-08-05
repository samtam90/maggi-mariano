import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Matera",
    canonical: links.autospurgo["matera"],
});
export default withBaseProps({ 
    title: "Autospurgo Matera", 
    locationNames: {label: "Matera", href: "matera"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["matera"],
        name: "Matera",
    }),
});
