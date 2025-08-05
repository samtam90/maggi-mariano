import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Gualdo Cattaneo",
  canonical: links.servizi["centrifugazione-fanghi"]["gualdo-cattaneo"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Gualdo Cattaneo",
  locationNames: { label: "Gualdo Cattaneo", href: "gualdo-cattaneo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
