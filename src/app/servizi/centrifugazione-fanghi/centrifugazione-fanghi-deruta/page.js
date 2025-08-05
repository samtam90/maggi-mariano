import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Deruta",
  canonical: links.servizi["centrifugazione-fanghi"]["deruta"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Deruta",
  locationNames: { label: "Deruta", href: "deruta" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
