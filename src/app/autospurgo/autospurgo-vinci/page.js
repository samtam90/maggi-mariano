import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Vinci",
    canonical: links.autospurgo["vinci"],
});
export default withBaseProps({ 
    title: "Autospurgo Vinci", 
    locationNames: {label: "Vinci", href: "vinci"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["firenze"],
        name: "Firenze",
    }),
});
