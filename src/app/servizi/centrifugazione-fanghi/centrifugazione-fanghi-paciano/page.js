import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Paciano",
  canonical: links.servizi["centrifugazione-fanghi"]["paciano"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Paciano",
  locationNames: { label: "Paciano", href: "paciano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
