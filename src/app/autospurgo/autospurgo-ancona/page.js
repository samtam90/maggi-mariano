import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Ancona",
    canonical: links.autospurgo["ancona"],
});
export default withBaseProps({ 
    title: "Autospurgo Ancona", 
    locationNames: {label: "Ancona", href: "ancona"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["ancona"],
        name: "Ancona",
    }),
});
