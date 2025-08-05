import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Ascoli Piceno",
    canonical: links.autospurgo["ascoli-piceno"],
});
export default withBaseProps({ 
    title: "Autospurgo Ascoli Piceno", 
    locationNames: {label: "Ascoli Piceno", href: "ascoli-piceno"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["ascoli-piceno"],
        name: "Ascoli Piceno",
    }),
});
