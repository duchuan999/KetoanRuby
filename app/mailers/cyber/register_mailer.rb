class Cyber::RegisterMailer < ActionMailer::Base
  # định nghĩa email mặc định
  default from: "son.nguyen@medisoft.vn"

  # gửi email
  def send_to(email_to, username)
    begin
      # cấu hình email
      email_settings = YAML::load(File.open("#{Rails.root.to_s}/config/locales/cyber/email.yml"))
      ActionMailer::Base.smtp_settings = email_settings[:config_email] unless email_settings[:config_email].nil?

      # định nghĩa tiêu đề
      subject = t('register_mailer.subject')
      # nội dung email, note: có thể sử dụng view để định dạng nội dung đẹp hơn
      body = t('register_mailer.body', :username => username)

      # gửi
      mail(:to => email_to, :subject => subject, :body => body, :content_type => "text/html")
    end
  end
end