import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Campello sul Clitunno",
    canonical: links.autospurgo["campello-sul-clitunno"],
});
export default withBaseProps({ 
    title: "Autospurgo Campello sul Clitunno", 
    locationNames: {label: "Campello sul Clitunno", href: "campello-sul-clitunno"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["perugia"],
        name: "Perugia",
    }),
});
