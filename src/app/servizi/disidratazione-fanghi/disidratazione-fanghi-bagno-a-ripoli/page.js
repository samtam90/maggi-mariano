import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Bagno a Ripoli",
  canonical: links.servizi["disidratazione-fanghi"]["bagno-a-ripoli"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Bagno a Ripoli",
  locationNames: { label: "Bagno a Ripoli", href: "bagno-a-ripoli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
