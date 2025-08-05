import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Campello sul Clitunno",
  canonical: links.servizi["centrifugazione-fanghi"]["campello-sul-clitunno"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Campello sul Clitunno",
  locationNames: { label: "Campello sul Clitunno", href: "campello-sul-clitunno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
