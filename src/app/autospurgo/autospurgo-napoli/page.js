import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Napoli",
    canonical: links.autospurgo["napoli"],
});
export default withBaseProps({ 
    title: "Autospurgo Napoli", 
    locationNames: {label: "Napoli", href: "napoli"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["napoli"],
        name: "Napoli",
    }),
});
